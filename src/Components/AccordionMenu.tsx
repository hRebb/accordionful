import React, {useState} from "react";
import AccordionItem from "./AccordionItem";

interface AccordionItemProps {
    title: string;
    content: string;
}

interface AccordionMenuProps {
    items: AccordionItemProps[];
  }
  
  const AccordionMenu = ({ items }: AccordionMenuProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const handleItemClick = (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  
    return (
      <div className="accordion-menu">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            index={index}
            active={index === activeIndex}
            title={item.title}
            content={item.content}
            onClick={handleItemClick}
          />
        ))}
      </div>
    );
  };
 
export default AccordionMenu;