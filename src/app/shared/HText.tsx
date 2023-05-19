
type Props = {
    className?: string;
    children: React.ReactNode;
}

const HText: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <h1 className={`basis-3/5 font-montserrat text-3xl font-bold ${className}`}>{children}</h1>
    )
}

export default HText;