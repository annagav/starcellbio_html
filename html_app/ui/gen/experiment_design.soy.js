// This file was automatically generated from experiment_design.soy.
// Please don't edit this file by hand.

if (typeof scb_experiment_design == 'undefined') { var scb_experiment_design = {}; }


scb_experiment_design.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_experiment_design_view\'>');
  scb_homepage.display_header(opt_data, output);
  scb_common.assignment_step({step: 3, last_step: opt_data.last_step, assignment_name: opt_data.assignment.name, experiment_name: opt_data.experiment.name, assignment: opt_data.assignment, experiment: opt_data.experiment}, output);
  scb_experiment_design.display_details(opt_data, output);
  scb_homepage.display_footer({global_template: opt_data.t, assignment: opt_data.assignment}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_experiment_design.display_details = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_experiment_design_container\'><div class=\'scb_s_design_description\'>');
  scb_common.experiment_step({step: 1, last_step: opt_data.last_step, assignment: opt_data.assignment, experiment: opt_data.experiment}, output);
  output.append(' <br/><!--<div class=\'experiment_name_header\'>Experiment name:</div>--><input type=\'text\' class=\'scb_s_experiment_name_edit\' maxlength="15" assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' value=\'', soy.$$escapeHtml(opt_data.experiment.name), '\'><br/><!--', opt_data.assignment.description, opt_data.t.instructions, '--><br/><div class=\'scb_objective_number scb_objective_design\'><div>1</div></div><div class=\'scb_s_experiment_design_objective_container\'><div class=\'scb_s_experiment_design_objective_text\' id=\'scb_s_experiment_design_objective_text_label\'>What question is your experiment going to address?</div><textarea aria-labelledby="scb_s_experiment_design_objective_text_label" class=\'scb_s_experiment_design_objective\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'>', soy.$$escapeHtml(opt_data.experiment.objective), '</textarea></div><br/><div class=\'scb_objective_number scb_objective_design\'><div>2</div></div><div class=\'scb_s_experiment_design_hypothesis_container\'><div class=\'scb_s_experiment_design_hypothesis_text\' id="scb_s_experiment_design_hypothesis_label">Do you have a hypothesis for this experiment? If so, please write it below.</div><textarea aria-labelledby="scb_s_experiment_design_hypothesis_label" class=\'scb_s_experiment_design_hypothesis\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'>', soy.$$escapeHtml(opt_data.experiment.hypothesis), '</textarea></div><br/><div class=\'scb_objective_number scb_objective_design\'><div>3</div></div><div class=\'scb_s_experiment_design_techniques_container\'><div class=\'scb_s_experiment_design_techniques_text\'>What technique(s) might be best suited for the analysis of this experiment?</div><span class=\'scb_s_experiment_design_techniques_tq_note\'>Please note that by selecting a technique(s), you will not alter the techniques that are available to you for this experiment.</span><span class=\'scb_s_experiment_design_techniques_tq\'>');
  scb_experiment_design.display_techniques({techniques: ['wb', 'fc', 'micro'], experiment: opt_data.experiment, assignment: opt_data.assignment}, output);
  output.append('</span></div><br/></div><a class="scb_f_open_experiment_setup scb_s_navigation_button" href="#view=experiment_setup&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '">EXPERIMENT SETUP &nbsp; &#9654;</a><br/><a class="scb_f_open_assignment scb_s_navigation_button" href="#view=assignment&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '">&#9664; &nbsp; COMPLETE ASSIGNMENT</a></div>');
  return opt_sb ? '' : output.toString();
};


scb_experiment_design.display_techniques = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var techList67 = opt_data.techniques;
  var techListLen67 = techList67.length;
  for (var techIndex67 = 0; techIndex67 < techListLen67; techIndex67++) {
    var techData67 = techList67[techIndex67];
    output.append((techData67 == 'wb') ? '<span class=\'scb_s_experiment_design_technique_wb ' + ((opt_data.experiment.design_wb_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\'><div class=\'scb_s_experiment_design_technique \' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_wb_cb\' role="button" ' + ((opt_data.experiment.design_wb_cb) ? 'aria-selected="true"' : '') + '><span class=\'scb_s_homepage_technique_title_image\'><!--        <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_wb_cb) + '\'  assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_wb_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_wb_cb) ? 'checked=\'checked\'' : '') + '>-->        Western Blot</span><!-- <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/western_blot.png\'>-->Western blotting detects overall changes in the amount or chemical modifications of a particular protein.</div><a href="static/ref_lib/full_library.html#WesternBlotting" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', (techData67 == 'fc') ? '<span class=\'scb_s_experiment_design_technique_flow ' + ((opt_data.experiment.design_fc_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\'><div class=\'scb_s_experiment_design_technique \' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_fc_cb\' role="button" ' + ((opt_data.experiment.design_fc_cb) ? 'aria-selected="true"' : '') + '><span class=\'scb_s_homepage_technique_title_image\'><!--        <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_fc_cb) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_fc_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_fc_cb) ? 'checked=\'checked\'' : '') + '>-->        Flow Cytometry</span><!-- <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/flow_cytometry.png\'> -->Flow cytometry is used to count and analyze the size, shape and properties of individual cells within a heterogeneous population of cells.</div><a href="static/ref_lib/full_library.html#FlowCytometry" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', (techData67 == 'fc') ? '<span class=\'scb_s_experiment_design_technique_micro ' + ((opt_data.experiment.design_mi_cb) ? 'scb_s_experiment_design_selected' : 'scb_s_experiment_design_unselected') + '\'><div role=\'button\' class = \'scb_s_experiment_design_technique \' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_mi_cb\' role="button" ' + ((opt_data.experiment.design_mi_cb) ? 'aria-selected="true"' : '') + '><span class=\'scb_s_homepage_technique_title_image\'><!--       <input type="checkbox" value=\'' + soy.$$escapeHtml(opt_data.experiment.design_mi_cb) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' data-key=\'design_mi_cb\' class=\'scb_s_experiment_design_technique_checkbox\' ' + ((opt_data.experiment.design_mi_cb) ? 'checked=\'checked\'' : '') + '>-->        Microscopy</span><!--    <img class=\'scb_s_homepage_technique_title_image\' src=\'images/homepage/microscopy.png\'> -->Microscopy is used to study the shape, morphology and properties of cells, tissues or organisms that otherwise cannot be observed by eye.</div><a href="static/ref_lib/full_library.html#Microscopy" class=\'scb_s_homepage_technique_learn_more\' target=\'_blank\'>LEARN MORE</a></span>' : '', '<!--<img class=\'scb_s_homepage_technique_more\' src=\'images/homepage/more_techniques.png\'>-->');
  }
  return opt_sb ? '' : output.toString();
};
