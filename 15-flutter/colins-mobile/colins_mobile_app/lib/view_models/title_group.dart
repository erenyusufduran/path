class TitleGroup {
  String title;
  String? actionLabel;
  void Function()? actionOnTab;

  TitleGroup({required this.title, this.actionLabel, this.actionOnTab});
}
