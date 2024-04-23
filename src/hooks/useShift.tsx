import Swal from "sweetalert2";
import shiftApi from "../api/api";

interface Config {
  headers: object;
}

const config: Config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    fetchOptions: {
      mode: "no-cors",
    },
  },
};

export const useShift = () => {
  const addReason = async (reason: string, user: string | number) => {
    try {
      const { data } = await shiftApi.post(
        "/reason-for-disposals",
        { reason, user },
        config
      );
      Swal.fire({
        title: "Motivo agregado",
        text: data.message,
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      Swal.fire({
        title: "Ocurrió un error",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  return {
    addReason,
  };
};
