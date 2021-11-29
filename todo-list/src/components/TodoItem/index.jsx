import React from 'react';

function TodoItem({ item, onClickRemove }) {
	return (
		<div className="item">
			<span>{item}</span>
			<button className={"btn btn-small btn-secondary"} onClick={() => onClickRemove(item)}>X</button>
		</div>
	);
}

export default TodoItem;
