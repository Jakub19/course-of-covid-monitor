import { useState, useEffect } from 'react';
export default function useFindUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function findUser() {
            const cookie = await JSON.parse(localStorage.getItem('user'));
            if (cookie != null) {
                setUser(cookie);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        }
        findUser();
    }, []);
    return {
        user,
        setUser,
        isLoading
    }
}