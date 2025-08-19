import client from './sanity';

export async function getProjects() {
  // Sample GROQ query for 'project' documents
  return await client.fetch(`*[_type == "project"]{_id, title, description, image}`);
}
