import toast from "react-hot-toast";

export const showErrorToast = (message?: string) => {
  toast.error(message || "Something went wrong! Try again later", {
    position: "top-center",
  });
};
