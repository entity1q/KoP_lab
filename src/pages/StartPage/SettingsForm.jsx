import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGameSettings } from "../../context/GameSettingsContext";
import "./SettingsForm.css";

const schema = yup.object().shape({
    winLength: yup.number().min(3).max(6).required(),
    maxWins: yup.number().min(1).max(10).required(),
    player1Color: yup.string().required(),
    player2Color: yup.string().required(),
});

export default function SettingsForm({ onClose }) {
    const { settings, setSettings } = useGameSettings();

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema),
        defaultValues: settings,
    });

    function onSubmit(data) {
        setSettings(data);
        onClose();
    }

    return (
        <form className="settings-form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Налаштування гри</h3>

            <label>Перемога при N фішках</label>
            <input type="number" {...register("winLength")} />

            <label>Гра до N перемог</label>
            <input type="number" {...register("maxWins")} />

            <label>Колір гравця 1</label>
            <input type="color" {...register("player1Color")} />

            <label>Колір гравця 2</label>
            <input type="color" {...register("player2Color")} />

            <button type="submit">Зберегти</button>
        </form>
    );
}
