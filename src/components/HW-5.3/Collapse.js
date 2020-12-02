import React, { useState } from 'react'
import './Collapse.css'

const expandedLable = 'Скрыть';
const expandedArrow = '\u02C4';
const collapsedLabel = 'Подробнее';
const collapsedArrow = '\u02C5';
const paragraph = (
  <p className="collapse__task_paragraph">
    'Альфа-Банк, основанный в 1990 году, является универсальным банком,
    осуществляющим все основные виды банковских операций, представленных
    на рынке финансовых услуг, включая обслуживание частных и корпоративных
    клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.'
  </p>
);
  

export default function Collapse() {
  const [expanded, setExpanded] = useState(true);

  const handleCollapse = (event) => {
    event.preventDefault();
    setExpanded((collapsed) => collapsed ? false : true );
  };

  const styleCollapsed = {
    height: 0,
    opacity: 0,
    visibility: 'hidden',
  }

  return (
    <div className="collapse__task">
      <p className="collapse__task_paragraph" style={ expanded ? null : styleCollapsed }>
        'Альфа-Банк, основанный в 1990 году, является универсальным банком,
        осуществляющим все основные виды банковских операций, представленных
        на рынке финансовых услуг, включая обслуживание частных и корпоративных
        клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.'
      </p>
      <span className="collapse__task_btn" onClick={ handleCollapse }>
        { expanded ? expandedLable : collapsedLabel }
      </span>
      &nbsp;
      <span>{ expanded ? expandedArrow : collapsedArrow }</span>
    </div>
  )
}
