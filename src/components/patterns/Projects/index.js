import React from 'react';
import Image from 'next/image';
import Text from '../../foundation/Text';
import Grid from '../../foundation/layout/Grid';
import ProjectsWrapper from './styles';
import { projects } from '../../../../db.json';
import Link from '../../commons/Link';

export default function Project() {
  return (
    <ProjectsWrapper>
      <Text
        tag="h2"
        variant={{ xs: 'sectionTitleXs', md: 'sectionTitle' }}
      >
        Meus Projetos
      </Text>
      <Grid>
        <Grid.Row>
          <ProjectsWrapper.List>
            {projects.map((project) => (
              <Grid.Column
                as="li"
                value={{ xs: 12, md: 4 }}
                key={project.title}
              >
                <Link href={`/projects/${project.title.toLowerCase()}`}>
                  <ProjectsWrapper.Card>
                    <Image
                      src={project.image}
                      alt="Imagem do projeto"
                      width={500}
                      height={500}
                    />
                    <Text tag="h3" variant={{ xs: 'componentTitleXs', md: 'componentTitle' }}>
                      {project.title}
                    </Text>
                  </ProjectsWrapper.Card>
                </Link>
              </Grid.Column>
            ))}
          </ProjectsWrapper.List>
        </Grid.Row>
      </Grid>
    </ProjectsWrapper>
  );
}
