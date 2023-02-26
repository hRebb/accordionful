interface AccordionItemProps {
    title: string;
    content: string;
    isActive: boolean;
    onTitleClick: () => void;
}

const AccordionItem = ({
    title,
    content,
    isActive,
    onTitleClick,
}: AccordionItemProps) => {
    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`}>
            <div className="accordion-title" onClick={onTitleClick}>
                <i className={`fas ${isActive ? "fa-minus" : "fa-plus"}`} />
                {title}
            </div>
            <div className="accordion-content">{content}</div>
        </div>
    );
};

export default AccordionItem;