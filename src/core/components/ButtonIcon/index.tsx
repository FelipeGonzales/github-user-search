import './styles.scss'

type Props = {
    text:string;
}

const ButtonIcon = ({ text }: Props) => (
    <button className="btn btn-primary btn-icon">
        <h5>{text}</h5>
    </button>
);

export default ButtonIcon;