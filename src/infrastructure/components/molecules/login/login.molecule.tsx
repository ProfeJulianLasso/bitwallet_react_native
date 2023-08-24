import {ButtonAtom} from '@components';
import type {ReactElement} from 'react';
import {LoginMoleculeType} from './login.type';

const LoginMolecule = ({buttonAtomLogin}: LoginMoleculeType): ReactElement => (
  <ButtonAtom {...buttonAtomLogin} />
);

export default LoginMolecule;
