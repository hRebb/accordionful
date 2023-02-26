import React, {useState} from "react";
import AccordionItem from "./AccordionItem";

interface AccordionItemProps {
    title: string;
    content: string;
}

interface AccordionMenuProps {
    items: AccordionItemProps[];
}

const AccordionMenu = ({items}: AccordionMenuProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const onTitleClick = (index: number) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const renderedItems = items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
            <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isActive={isActive}
                onTitleClick={() => onTitleClick(index)}
            />
        );
    });

    return <div className="accordion-menu">
        {renderedItems}
    </div>;
}

export default AccordionMenu;