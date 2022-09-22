package com.ruoyi.task.domain;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 报告系统对象 task_report
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
public class TaskReport extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 报告ID */
    private Long reportId;

    /** 用户名 */
    @Excel(name = "用户名")
    private String reportName;

    /** 报告时间 */
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Excel(name = "报告时间", width = 30, dateFormat = "yyyy-MM-dd")
    private Date date;

    /** 报告标题 */
    @Excel(name = "报告标题")
    private String title;

    /** 报告类型 */
    @Excel(name = "报告类型")
    private String type;

    /** 报告内容 */
    @Excel(name = "报告内容")
    private String content;

    public void setReportId(Long reportId) 
    {
        this.reportId = reportId;
    }

    public Long getReportId() 
    {
        return reportId;
    }
    public void setReportName(String reportName) 
    {
        this.reportName = reportName;
    }

    public String getReportName() 
    {
        return reportName;
    }
    public void setDate(Date date) 
    {
        this.date = date;
    }

    public Date getDate() 
    {
        return date;
    }
    public void setTitle(String title) 
    {
        this.title = title;
    }

    public String getTitle() 
    {
        return title;
    }
    public void setType(String type) 
    {
        this.type = type;
    }

    public String getType() 
    {
        return type;
    }
    public void setContent(String content) 
    {
        this.content = content;
    }

    public String getContent() 
    {
        return content;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("reportId", getReportId())
            .append("reportName", getReportName())
            .append("date", getDate())
            .append("title", getTitle())
            .append("type", getType())
            .append("content", getContent())
            .toString();
    }
}
