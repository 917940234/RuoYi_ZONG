package com.ruoyi.task.mapper;

import java.util.List;
import com.ruoyi.task.domain.TaskReport;

/**
 * 报告系统Mapper接口
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
public interface TaskReportMapper 
{
    /**
     * 查询报告系统
     * 
     * @param reportId 报告系统主键
     * @return 报告系统
     */
    public TaskReport selectTaskReportByReportId(Long reportId);

    /**
     * 查询报告系统列表
     * 
     * @param taskReport 报告系统
     * @return 报告系统集合
     */
    public List<TaskReport> selectTaskReportList(TaskReport taskReport);

    /**
     * 新增报告系统
     * 
     * @param taskReport 报告系统
     * @return 结果
     */
    public int insertTaskReport(TaskReport taskReport);

    /**
     * 修改报告系统
     * 
     * @param taskReport 报告系统
     * @return 结果
     */
    public int updateTaskReport(TaskReport taskReport);

    /**
     * 删除报告系统
     * 
     * @param reportId 报告系统主键
     * @return 结果
     */
    public int deleteTaskReportByReportId(Long reportId);

    /**
     * 批量删除报告系统
     * 
     * @param reportIds 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteTaskReportByReportIds(String[] reportIds);
}
