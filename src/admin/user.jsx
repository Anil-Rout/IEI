// AdminUsers.jsx
import React, { useEffect, useState } from "react";
import './user.css'
import {
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper,
IconButton,
Typography,
CircularProgress,
Tooltip,
useMediaQuery,
} from "@mui/material";
import { Edit, Delete, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import axios from "axios";

const AdminUsers = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const isMobile = useMediaQuery("(max-width:600px)");

const fetchUsers = async () => {
try {
    const res = await axios.get(
    "https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/get-all-getAllUsers"
    );
    setUsers(res.data);
    setLoading(false);
} catch (err) {
    console.error(err);
    setError("Failed to fetch users.");
    setLoading(false);
}
};

useEffect(() => {
fetchUsers();
}, []);

const handleDelete = (userId) => {
if (window.confirm("Are you sure you want to delete this user?")) {
    console.log("Delete user:", userId);
}
};

const handleChangeRole = (userId, currentType) => {
const newType = currentType === "ADMIN" ? "USER" : "ADMIN";
console.log(`Change role of ${userId} to ${newType}`);
};

if (loading) return <CircularProgress sx={{ mt: 4 }} />;

if (error) return <Typography color="error">{error}</Typography>;

return (
<TableContainer
    component={Paper}
    sx={{
    mt: 4,
    borderRadius: 2,
    boxShadow: 3,
    overflowX: "auto", // enable horizontal scroll on mobile
    }}
>
    <Typography
    variant={isMobile ? "h6" : "h5"}
    sx={{ p: isMobile ? 1 : 2, fontWeight: 600 }}
    >
    Users Management
    </Typography>
    <Table sx={{ minWidth: isMobile ? 600 : "auto" }}>
    <TableHead>
        <TableRow>
        <TableCell>User ID</TableCell>
        <TableCell>Username</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Created At</TableCell>
        <TableCell align="center">Actions</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {users.map((user) => (
        <TableRow
            key={user.userId}
            sx={{
            "&:hover": { backgroundColor: "#f5f5f5" },
            }}
        >
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.type}</TableCell>
            <TableCell>
            {new Date(user.createdAt).toLocaleString()}
            </TableCell>
            <TableCell align="center">
            <Tooltip
                title={
                user.type === "ADMIN"
                    ? "Demote to User"
                    : "Promote to Admin"
                }
            >
                <IconButton
                color={user.type === "ADMIN" ? "warning" : "primary"}
                size={isMobile ? "small" : "medium"}
                onClick={() => handleChangeRole(user.userId, user.type)}
                >
                {user.type === "ADMIN" ? <ArrowDownward /> : <ArrowUpward />}
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit User">
                <IconButton
                color="info"
                size={isMobile ? "small" : "medium"}
                onClick={() => console.log("Edit user:", user.userId)}
                >
                <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete User">
                <IconButton
                color="error"
                size={isMobile ? "small" : "medium"}
                onClick={() => handleDelete(user.userId)}
                >
                <Delete />
                </IconButton>
            </Tooltip>
            </TableCell>
        </TableRow>
        ))}
        {users.length === 0 && (
        <TableRow>
            <TableCell colSpan={6} align="center">
            No users found
            </TableCell>
        </TableRow>
        )}
    </TableBody>
    </Table>
</TableContainer>
);
};

export default AdminUsers;
