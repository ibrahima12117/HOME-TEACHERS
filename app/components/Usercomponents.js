import { useState, useEffect } from 'react';

const UserComponent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/users/'); 
            const data = await response.json();
            setUserData(data);
        };
        
        fetchData();
    }, []);

    return (
        <div>
            {userData ? (
                <div>
                    {userData.map(user => (
                        <div key={user._id}>{user.nom}</div>
                       
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default UserComponent;
