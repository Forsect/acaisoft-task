import toast from "react-hot-toast";

export const showErrorToast = () => {
  toast.error("Something went wrong! Try again later", {
    position: "top-center",
  });
};
