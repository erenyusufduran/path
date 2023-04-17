import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// summary.buildAndPrintReport(matchReader.matches);

// const _summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
// _summary.buildAndPrintReport(matchReader.matches);

const summaryWithStaticMethods = Summary.winsAnalysisWithHtmlReport("Man United");
summaryWithStaticMethods.buildAndPrintReport(matchReader.matches);
