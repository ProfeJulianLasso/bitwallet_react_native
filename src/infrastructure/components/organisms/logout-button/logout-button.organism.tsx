import type {ReactElement} from 'react';
import {LogoutButtonMolecule} from '../../molecules';
import {LogoutButtonOrganismType} from './logout-button.type';

const LogoutButtonOrganism = ({
  button,
}: LogoutButtonOrganismType): ReactElement => (
  <LogoutButtonMolecule {...button} />
);

export default LogoutButtonOrganism;
