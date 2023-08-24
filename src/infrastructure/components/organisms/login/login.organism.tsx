import {LoginMolecule} from '@components';
import {LoginOrganismType} from './login.type';

const LoginOrganism = ({loginMolecule}: LoginOrganismType) => (
  <LoginMolecule {...loginMolecule} />
);

export default LoginOrganism;
