#!/usr/bin/env bash
set -e

DEPLOY_PATH=/home/glutenfr/projects/dev.ivanstanojevic.me
HOST=ivanstanojevic.me
USER=glutenfr
PORT=2233
ARTIFACT_NAME=artifact-$(date '+%Y%m%d%H%M%S').tar.gz

echo "yarn build"
yarn build

echo "create artifact"
tar -czf "${ARTIFACT_NAME}" -C build .

echo "upload artifact"
scp -r -P ${PORT} "${ARTIFACT_NAME}" ${USER}@${HOST}:/${DEPLOY_PATH}/
rm "${ARTIFACT_NAME}"

echo "deploy on server"
ssh ${USER}@${HOST} -p${PORT} "cd ${DEPLOY_PATH} && tar -xf ${ARTIFACT_NAME} && rm ${ARTIFACT_NAME}"
