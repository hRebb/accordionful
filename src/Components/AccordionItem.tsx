import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

interface AccordionItemProps {
    index: number;
    active: boolean;
    title: string;
    content: string;
    onClick: (index: number) => void;
  }
  
  const AccordionItem = ({
    index,
    active,
    title,
    content,
    onClick,
  }: AccordionItemProps) => {
    const handleItemClick = () => {
      onClick(index);
    };
  
    return (
      <div className="accordion-item">
        <AccordionTitle title={title} isActive={active} onClick={handleItemClick} />
        {active && <AccordionContent content={content} />}
      </div>
    );
  };
  
export default AccordionItem;