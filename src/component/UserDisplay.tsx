interface UserDisplayProps {
    displayName: string;
    clickCount: number;
    onUpdateClick: () => void;
}


const UserDisplay = ({ displayName, clickCount, onUpdateClick }: UserDisplayProps) => {
    return (
        <>
             <div>User Display</div>
            <div>Fullname: {displayName}</div>
            <div>Views: {clickCount}</div>
            <button onClick={onUpdateClick}>Nhan de tang so lan tuong tac</button>
        
        </>
    );
}

export default UserDisplay;