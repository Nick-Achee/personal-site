import React from 'react';
import Container from '@material-ui/core/Container';

import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Stories from '../components/Stories'
import Feeds from '../components/Feeds'

export default function About() {
  return (
    <div>
        <Stories />
        <Feeds />
        </div>
  );
}
