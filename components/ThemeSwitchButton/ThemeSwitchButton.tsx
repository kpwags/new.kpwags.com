import { SettingOutlined } from '@ant-design/icons';

type ThemeSwitchButtonProps = {
    onClick: () => void
}

const ThemeSwitchButton = ({
    onClick,
}: ThemeSwitchButtonProps): JSX.Element => (
    <SettingOutlined
        className="search-icon"
        onClick={onClick}
    />
);

export default ThemeSwitchButton;
