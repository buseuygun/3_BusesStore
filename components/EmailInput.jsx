'use client'

import { useState } from "react"

export default function EmailInput() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    async function handleAddSubscriber() {
        try {
            setEmail('🎉 You’re subscribed to updates.')
            setSubscribed(true)

            setTimeout(() => {
                setEmail('')
            }, 2000)

        } catch (err) {
            console.log('Failed to add subscriber: ', err.message)
        }
    }

    return (
        <div className="sign-up">
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address..."
                disabled={subscribed}
            />

            <button
                onClick={handleAddSubscriber}
                className="button-card"
                disabled={subscribed}
            >
                {subscribed ? 'Subscribed' : 'Sign Up'}
            </button>
        </div>
    )
}