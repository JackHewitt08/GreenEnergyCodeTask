import logo from '../../images/logo.svg'
import { SignInButton } from '../SignInButton';
import { Title } from '../Title'
import { EmailAddress } from '../EmailAddress'

export const ContentContainer = () => {
    return (
        <div className="content-container">
            <a className="logo" href="https://green.energy">
                <img src={logo} alt='Green Logo' />
            </a>
            <Title />
            <EmailAddress />
            <SignInButton />
        </div>
    )
}