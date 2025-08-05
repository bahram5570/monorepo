export const chatFileTypeDetector = (fileName: string) => {
  const imageTypes = ['png', 'jpg', 'jpeg', 'webp'];
  const voiceTypes = ['mp3', 'wav', 'ogg', 'flac', 'aac'];
  const fileTypes = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'txt'];

  const stringList = fileName.split('.');
  const typeName = stringList[stringList.length - 1].toLocaleLowerCase();
  const isImageType = imageTypes.includes(typeName);
  const isVoiceType = voiceTypes.includes(typeName);
  const isFileType = fileTypes.includes(typeName);

  return { isImageType, isVoiceType, isFileType };
};
