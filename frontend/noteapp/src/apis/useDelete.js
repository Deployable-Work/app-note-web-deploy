import React from 'react'

export async function useDelete(url) {

    const response = await fetch( url , {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });
}