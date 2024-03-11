type HeaderProps = {
    username: string;
}

const Header = (props: HeaderProps) => <nav><span>{props.username}</span></nav>;

export default Header;
