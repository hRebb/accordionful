interface AccordionContentProps {
    content: string;
}

const AccordionContent = ({content}: AccordionContentProps) => {
    return <div className="accordion-content">
        {content}
    </div>
};

export default AccordionContent;