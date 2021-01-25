interface IformErrorProps {
    errorMsg:string;
    className?:string;
}
export function FormError({errorMsg, className}:IformErrorProps) {
    return (
        <div className={String('font-bold text-sm text-left -mt-5 text-red-400 ' + className)}>
            {errorMsg}
        </div>
    )
}
