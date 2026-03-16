const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= SIGNUP ================= */
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "⚠️ User already exists. Please login instead.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign(
            { id: newUser._id },
            "SECRET_KEY",
            { expiresIn: "7d" }
        );

        res.status(201).json({
            success: true,
            message: "✅ Account created successfully!",
            token,
            user: {
                name: newUser.name,
                email: newUser.email,
            },
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error. Try again later.",
        });
    }
});

/* ================= LOGIN ================= */
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user)
            return res.status(400).json({
                success: false,
                message: "User not found",
            });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch)
            return res.status(400).json({
                success: false,
                message: "Invalid password",
            });

        const token = jwt.sign(
            { id: user._id },
            "SECRET_KEY",
            { expiresIn: "7d" }
        );

        res.json({
            success: true,
            message: "Login successful",
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        });

    } catch {
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

module.exports = router;