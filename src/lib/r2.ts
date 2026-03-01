import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

type UploadParams = {
  key: string;
  body: Uint8Array | Buffer;
  contentType: string;
  cacheControl?: string;
};

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function getR2Client() {
  const accountId = requireEnv("R2_ACCOUNT_ID");
  const accessKeyId = requireEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = requireEnv("R2_SECRET_ACCESS_KEY");

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
}

export async function r2UploadPublic({ key, body, contentType, cacheControl }: UploadParams) {
  const bucket = requireEnv("R2_BUCKET");
  const publicBaseUrl = requireEnv("R2_PUBLIC_BASE_URL").replace(/\/+$/, "");

  const client = getR2Client();

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: cacheControl ?? "public, max-age=31536000, immutable",
    }),
  );

  return `${publicBaseUrl}/${key}`;
}

