import React from 'react';

interface DeleteButtonProps {
    onDelete: () => Promise<void>;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
    const handleClick = async () => {
        await onDelete();
    };

    return <button onClick={handleClick}>Delete</button>;
};

export default DeleteButton;
