export const EmailAddress = () => {
    return (
        <div className="email-address-container">
            <form>
                <label htmlFor="email-address-form" id="email-address-title">
                    Email Address
                </label>
                <input type="text" className="email-address-form"/>
                <div className="email-address-actions">
                    <input 
                        type="checkbox" 
                    />
                    <label htmlFor="checkbox" id="email-address-checkbox-label">
                        Remember this device
                    </label>
                </div>
            </form>
        </div>
    )
}
