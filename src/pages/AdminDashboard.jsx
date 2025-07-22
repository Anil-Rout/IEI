import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    const checkRole = async () => {
      try {
        const res = await axios.post(
          "https://75fslghrrk.execute-api.ap-south-1.amazonaws.com/dev/get-user",
          {
            userId: user.id,
          }
        );
        if (res.data?.type === "ADMIN") {
          setIsAdmin(true);
        }
      } catch (err) {
        console.error("Role check failed", err.message);
      }
    };

    checkRole();
  }, [isLoaded, isSignedIn]);

  if (!isAdmin) return <div>Access denied. Admins only.</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button>Create Event</button>
      <button>Edit Event</button>
      <button>Post Event</button>
    </div>
  );
};

export default AdminDashboard;
