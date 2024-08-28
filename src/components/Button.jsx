// eslint-disable-next-line react/prop-types
export const Button = ({ label, icon, variant }) => {
    return (
        <>
            {label && (
                <button className={`py-2 px-6 rounded-lg text-4xl hover:-translate-y-1 transition-all ease-in duration-200 ${variant === "primary" ? "bg-accentColor" : "bg-white text-black"}`}>
                    {label}
                </button>
            )}
            {icon && (
                <button className={`py-2 px-3 rounded-lg text-4xl hover:-translate-y-1 transition-all ease-in duration-200 ${variant === "primary" ? "bg-accentColor" : "bg-white text-black"}`}>
                    {icon}
                </button>
            )}
        </>
    );
}