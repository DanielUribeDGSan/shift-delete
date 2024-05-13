import React, { useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { useShift } from "../hooks/useShift";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export const CardForm = () => {
  const { user } = useParams();

  const [reason, setReason] = useState<string>();
  const [reasonOther, setReasonOther] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { addReason } = useShift();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReasonOther("");
    setReason(e.target.value);
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReasonOther(e.target.value);
  };

  const handleClickAddReason = async () => {
    if (!reason) {
      Swal.fire({
        title: "Motivo vacío",
        text: "Debes escoger un motivo para eliminar tu cuenta",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    } else if (reason === "Otro" && !reasonOther) {
      Swal.fire({
        title: "Motivo vacío",
        text: "Debes escribir un motivo para eliminar tu cuenta",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    if (user) {
      setLoading(true);
      const reasonValidate = reason === "Otro" ? reasonOther : reason;
      await addReason(reasonValidate || reason, user.toString());
      setLoading(false);
    }
    cleanForm();
  };

  const cleanForm = () => {
    setReason("");
    setReasonOther("");
  };

  return (
    <MagicMotion>
      <div className="w-100">
        <div className="card__form">
          <h3>
            ¿Cuál es el motivo por el que deseas eliminar tu cuenta de SHIFT?
          </h3>
          <hr />
          <form>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "No tengo dinero para pagar la suscripción"}
                value="No tengo dinero para pagar la suscripción"
                id="reason1"
              />
              <label className="form-check-label" htmlFor="reason1">
                No tengo dinero para pagar la suscripción
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={
                  reason === "Encontré otra app de ejercicio que me gusta más"
                }
                value="Encontré otra app de ejercicio que me gusta más"
                id="reason2"
              />
              <label className="form-check-label" htmlFor="reason2">
                Encontré otra app de ejercicio que me gusta más
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "No uso Shift lo suficiente"}
                value="No uso Shift lo suficiente"
                id="reason3"
              />
              <label className="form-check-label" htmlFor="reason3">
                No uso Shift lo suficiente
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "Tuve problemas Técnicos para usar Shift"}
                value="Tuve problemas Técnicos para usar Shift"
                id="reason4"
              />
              <label className="form-check-label" htmlFor="reason4">
                Tuve problemas Técnicos para usar Shift
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "Tuve problemas con el pago"}
                value="Tuve problemas con el pago"
                id="reason5"
              />
              <label className="form-check-label" htmlFor="reason5">
                Tuve problemas con el pago
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "Tuve problemas para verificar mi plan"}
                value="Tuve problemas para verificar mi plan"
                id="reason6"
              />
              <label className="form-check-label" htmlFor="reason6">
                Tuve problemas para verificar mi plan
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="reason"
                onChange={onChange}
                checked={reason === "Otro"}
                value="Otro"
                id="reason7"
              />
              <label className="form-check-label" htmlFor="reason7">
                Otro
              </label>
            </div>
            {reason === "Otro" && (
              <div className="other">
                <label htmlFor="other">Otra opción:</label>
                <textarea
                  aria-label="empty textarea"
                  placeholder="Escribe tu respuesta aquí..."
                  onChange={onChangeText}
                  value={reasonOther}
                  id="other"
                  name="other"
                  rows={4}
                  maxLength={200}
                />
              </div>
            )}
          </form>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <div className="buttons">
            {loading ? (
              <div
                className="spinner-border"
                role="status"
                style={{ color: "var(--tp-common-green)" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                className="btn-green"
                type="button"
                aria-label="delete account"
                onClick={handleClickAddReason}
              >
                ¡Si, deseo eliminar la cuenta!
              </button>
            )}
            {/* <button
              className="btn-transparent"
              type="button"
              aria-label="cancel action"
            >
              Cancelar
            </button> */}
          </div>
        </div>
      </div>
    </MagicMotion>
  );
};
