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
        title: "Cuenta eliminada",
        text: "Tu cuenta ha sido eliminada correctamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
    } catch (error) {
      const respError = error.response.data;
      console.log("respError", respError);

      if (respError.codeError === 1) {
        Swal.fire({
          title: "Ocurrió un error",
          text: respError.error,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      } else {
        Swal.fire({
          title: "Cuenta eliminada",
          text: "Tu cuenta ha sido eliminada correctamente",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      }
    }
  };

  return {
    addReason,
  };
};
