import React, { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import { useGeneralStore } from "../stores/generalStore";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const userId = useUserStore((state) => state.id);
  const toggleLoginModel = useGeneralStore((state) => state.toggleLoginModal);

  useEffect(() => {
    if (!userId) {
      toggleLoginModel();
    }
  }, [userId, toggleLoginModel]);
  if (userId) {
    return children;
  }
  return <div>ProtectRoutes</div>;
};

export default ProtectedRoutes;
