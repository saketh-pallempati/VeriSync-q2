import init, {
  get_pass_hash as wasmGetPassHash,
  generate_proof as wasmGenerateProof,
  verify_proof as wasmVerifyProof,
} from "../pkg/zk_wasm";

let initialized = false;

export async function ensureInitialized() {
  if (!initialized) {
    await init();
    initialized = true;
  }
}

export async function get_pass_hash(pass: string): Promise<string[]> {
  await ensureInitialized();
  return wasmGetPassHash(pass);
}

export async function generate_proof(
  username: number,
  password: string
): Promise<string> {
  await ensureInitialized();
  return wasmGenerateProof(username, password);
}

export async function verify_proof(
  proof: string,
  pub_inputs: string[],
  pub_username: number
): Promise<boolean> {
  await ensureInitialized();
  return wasmVerifyProof(proof, pub_inputs, pub_username);
}
