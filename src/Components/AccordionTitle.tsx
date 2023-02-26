interface AccordionTitleProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}

const AccordionTitle = ({title, isActive, onClick}: AccordionTitleProps) => {
    return (
        <div className={`accordion-title ${isActive ? "active" : ""}`} onClick={onClick}>
            <i className={`fas ${isActive ? "fa-minus" : "fa-plus"}`}/>
            <span>{title}</span>
        </div>
    );
};

export default AccordionTitle;