import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive, removeTransaction } from "../../features/transactions/transactionSlice";

export default function Transaction({transaction}) {
    const {name, type, amount, id} = transaction || {};
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editActive(transaction))
    }

    const handleDelete = () => {
        dispatch(removeTransaction(id));
    }

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img alt="Edit" className="icon" src={editImage} onClick={handleEdit} />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img alt="Delete" className="icon" src={deleteImage}  />
                </button>
            </div>
        </li>
    );
}
