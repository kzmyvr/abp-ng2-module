export type PermissionMap = Record<string, boolean>;

export const PermissionChecker = {
  isGranted(permission: string, granted: PermissionMap): boolean {
    return !!granted[permission];
  }
};
export default PermissionChecker;
