import logo from '../../images/logo.svg'
import { SignInButton } from '../SignInButton';
import { Title } from '../Title'
import { EmailAddress } from '../EmailAddress'

export const ContentContainer = () => {
    return (
        <div className="content-container">
            <img src={logo} className="logo" alt='Green Logo' />
            <Title />
            <EmailAddress />
            <SignInButton />
        </div>
    )
}