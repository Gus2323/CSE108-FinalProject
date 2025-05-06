import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setRole(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);
      const userDoc = await getDoc(doc(db, "users", currentUser.uid));
      if (userDoc.exists()) {
        setRole(userDoc.data().role);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  if (!user || !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
