import { testEnv } from "@/actions/serverActions";

export default async function DebugPage() {
  const env = await testEnv();

  return <pre>{JSON.stringify(env, null, 2)}</pre>;
}
