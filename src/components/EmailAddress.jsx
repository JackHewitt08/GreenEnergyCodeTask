export const EmailAddress = () => {
    let isChecked = false

    return (
        <div className="email-address-container">
            <form>
                <label for="email-address-form" className="email-address-title">
                    Email Address
                </label>
                <input type="text" className="email-address-form"/>
                <div className="email-address-actions">
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        onClick={isChecked = !isChecked}
                    />
                    <label for="checkbox" className="email-address-checkbox-label">
                        Remember this device
                    </label>
                </div>
            </form>
        </div>
    )
}
